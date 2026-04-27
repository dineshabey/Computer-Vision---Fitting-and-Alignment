# AgriGuard — Credit Risk Dashboard (MSc Project)

Lightweight Streamlit dashboard and FastAPI endpoint for credit-risk analysis and XAI visualizations.

Contents
- `app.py` — Streamlit dashboard (UI + analytics)
- `main.py` — FastAPI prediction endpoint example
- `advanced_analytics.py`, `ml_monitoring.py` — helper modules for analytics and monitoring
- `1_processed_loan_data_csv.csv` — sample dataset used by the app
- `credit_risk_model.pkl`, `ordinal_encoder.pkl` — example saved model artifacts (if present)

Quickstart (Windows, PowerShell)
1. Create & activate the venv (already created in this workspace):

```powershell
# from project folder
.\.venv\Scripts\Activate.ps1
```

2. Install dependencies (already executed by the maintainer or run manually):

```powershell
pip install -r requirements.txt
```

3. Run the Streamlit app:

```powershell
streamlit run app.py
```

4. Run the FastAPI server (optional):

```powershell
# serve the API in main.py on port 8000
.\.venv\Scripts\python -m uvicorn main:app --host 127.0.0.1 --port 8000
```

Notes
- If `credit_risk_model.pkl` or `ordinal_encoder.pkl` are missing, the API will fail to load the model — replace with your trained artifacts or adjust the code.
- `requirements.txt` lists the packages detected in the codebase; pin versions as needed for reproducibility.

Virtual environment (recommended)
--------------------------------
These commands show how to create, activate, and use a virtual environment. Replace `.venv` with your preferred name if desired. Run commands from the project root (`app_new`).

PowerShell (Windows - recommended):
```powershell
# create venv
python -m venv .venv

# activate venv in PowerShell
.\\.venv\\Scripts\\Activate.ps1

# install requirements
pip install -r requirements.txt

# deactivate when done
deactivate
```

Command Prompt (cmd.exe):
```bat
python -m venv .venv
.\\.venv\\Scripts\\activate.bat
pip install -r requirements.txt
deactivate
```

Git Bash / WSL / macOS / Linux (bash):
```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
deactivate
```

Verify environment python:
```powershell
# prints venv python path
where python
# or
python -c "import sys; print(sys.executable)"
```

Troubleshooting
- If activation is blocked in PowerShell, run `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned -Force` as administrator, then re-run activation.
- If `pip install` fails for compiled packages (e.g., `llvmlite`, `scipy`), ensure you have a compatible Python version and the Microsoft C++ build tools installed.

Contact
- For help running or packaging this project further, tell me what platform and goal (deploy, containerize, etc.) you want next.