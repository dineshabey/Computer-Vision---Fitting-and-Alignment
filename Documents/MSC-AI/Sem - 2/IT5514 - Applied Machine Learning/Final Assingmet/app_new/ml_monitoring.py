import streamlit as st
import pandas as pd
import numpy as np
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime, timedelta

def render_ml_monitoring(df):
    st.title("📟 Smart ML Operations (MLOps) Monitor")
    st.info("මෙමගින් AI පද්ධතියේ සෞඛ්‍ය සම්පන්නභාවය සහ නිරවද්‍යතාවය තථ්‍ය කාලීනව පරීක්ෂා කරයි.")

    # --- 1. MODEL PERFORMANCE TRACKING ---
    st.subheader("1. Model Performance (F1-Score & Accuracy)")
    
    # Simulating time-series performance data
    dates = [datetime.now() - timedelta(days=x) for x in range(30, 0, -1)]
    accuracy = np.random.uniform(0.85, 0.94, size=30)
    
    fig_perf = px.line(x=dates, y=accuracy, title="Model Accuracy Trend (Last 30 Days)",
                       labels={'x': 'Date', 'y': 'Accuracy Score'})
    fig_perf.add_hline(y=0.80, line_dash="dash", line_color="red", annotation_text="Threshold")
    st.plotly_chart(fig_perf, use_container_width=True)

    # --- 2. DATA DRIFT DETECTION ---
    st.divider()
    st.subheader("2. Data Drift Analysis (දත්ත විචලනය)")
    st.write("පුහුණු කළ දත්ත (Training Data) සහ දැනට ලැබෙන දත්ත (Serving Data) අතර වෙනස පරීක්ෂාව.")
    
    # Feature Drift Simulation
    features = ['Loan_Amount', 'Repayment_Percent', 'Outstanding_Balance']
    drift_scores = [0.02, 0.15, 0.05] # 0.15 indicates a drift in Repayment %
    
    drift_df = pd.DataFrame({"Feature": features, "Drift Score (PSI)": drift_scores})
    fig_drift = px.bar(drift_df, x="Feature", y="Drift Score (PSI)", color="Drift Score (PSI)",
                       color_continuous_scale=['green', 'yellow', 'red'], range_color=[0, 0.2])
    st.plotly_chart(fig_drift, use_container_width=True)
    
    if max(drift_scores) > 0.1:
        st.warning("⚠️ Data Drift Detected in 'Repayment_Percent'. Model retraining recommended.")

    # --- 3. SYSTEM HEALTH (LATENCY & LOAD) ---
    st.divider()
    st.subheader("3. System Health & Latency")
    
    col1, col2, col3 = st.columns(3)
    col1.metric("Avg Latency", "145ms", "-12ms")
    col2.metric("API Uptime", "99.98%", "Stable")
    col3.metric("Memory Usage", "1.2GB", "+5%")

    # Latency Distribution Plot
    latency_data = np.random.normal(150, 20, 1000)
    fig_lat = px.histogram(latency_data, nbins=50, title="Prediction Response Time Distribution",
                           labels={'value': 'Latency (ms)'}, color_discrete_sequence=['#9b59b6'])
    st.plotly_chart(fig_lat, use_container_width=True)