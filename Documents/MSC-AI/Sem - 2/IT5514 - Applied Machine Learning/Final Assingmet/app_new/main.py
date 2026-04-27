from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
import shap

app = FastAPI()

# 1. LOAD AI ASSETS
model = joblib.load('credit_risk_model.pkl')
encoder = joblib.load('ordinal_encoder.pkl')
explainer = shap.TreeExplainer(model)

class FarmerData(BaseModel):
    division: str
    loan_amount: float
    outstanding: float
    recovery: float

@app.post("/analyze")
def analyze_farmer(data: FarmerData):
    # Feature Engineering (Calculated automatically)
    repayment_ratio = data.recovery / data.loan_amount
    debt_ratio = data.outstanding / data.loan_amount
    
    # Categorize based on Banking Rules
    status = "හොඳින් ණය ගෙවන (Good Payer)"
    if repayment_ratio < 0.3 and debt_ratio > 0.7:
        status = "උසාවි ක්‍රියාමාර්ග (Court Case)"
    elif repayment_ratio < 0.6:
        status = "බේරුම්කරණ සභා (Mediation)"

    # Prepare for AI Prediction
    input_df = pd.DataFrame([{
        'Loan_Type': 'Maha', 'Officer_Assigned': 'Yes', 
        'Division': data.division, 'Loan_Amount': data.loan_amount,
        'Outstanding_Balance': data.outstanding, 'Total_Recovery': data.recovery,
        'Repayment_Ratio': repayment_ratio, 'Debt_Ratio': debt_ratio
    }])

    # AI Transformation using your saved encoder
    input_df[['Loan_Type', 'Officer_Assigned', 'Division']] = encoder.transform(
        input_df[['Loan_Type', 'Officer_Assigned', 'Division']]
    )
    
    risk_prob = model.predict_proba(input_df)[0][1]
    shap_values = explainer.shap_values(input_df)

    return {
        "status": status,
        "risk_probability": round(float(risk_prob), 2),
        "explanation": shap_values[0].tolist()
    }