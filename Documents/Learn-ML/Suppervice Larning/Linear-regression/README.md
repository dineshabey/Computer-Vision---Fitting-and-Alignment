
# 🎯 Salary Predictor App with Linear Regression
Explore and learn the magic of Supervised Learning through hands-on examples! This project features a Salary prediction app using Python's `scikit-learn` and helps you understand `Linear Regression` with training, testing, and evaluation.

---

## 📋 Features
- 📈 Predict salary based on years of experience.
- 🧠 Train a Linear Regression model using `scikit-learn`.
- 📊 Evaluate using MAE, MSE, RMSE, R².
- 📂 Modular project structure for educational and production use.

---

## 🗂 Project Structure

```
salary-predictor/
├── data/
│   └── Salary_Data.csv          # Dataset (Years of Experience vs Salary)
├── notebooks/
│   └── Salary_Prediction_Tutorial.py  # Full tutorial code (Colab style)
├── src/
│   └── (future) train_model.py, predict.py
├── app/
│   └── (future) Streamlit app.py
├── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- 🐍 Python 3.x
- 📦 Install libraries:
```bash
pip install numpy pandas matplotlib scikit-learn
```

---

## 🛠 How to Use

### 🔢 Train & Predict

```python
from sklearn.linear_model import LinearRegression

regressor = LinearRegression()
regressor.fit(X_train, y_train)

y_pred = regressor.predict(X_test)
```

### 📊 Evaluate Accuracy

```python
from sklearn.metrics import mean_absolute_error, r2_score

print("MAE:", mean_absolute_error(y_test, y_pred))
print("R² Score:", r2_score(y_test, y_pred))
```

### 📉 Visualize Results

```python
plt.scatter(X_test, y_test, color='green')
plt.plot(X_train, regressor.predict(X_train), color='blue')
plt.title('Salary vs Experience')
plt.xlabel('Years')
plt.ylabel('Salary')
plt.show()
```

---

## 🌟 Why Linear Regression?

- 🔍 Ideal for understanding relationships in numerical data.
- 🧠 Forms the foundation for more advanced regression models.
- 📊 Easy to implement and visualize.

---

## 🌐 Live Demo & Code

- 💾 Download project files from this repository.
- 🔗 Streamlit UI coming soon!

---

## 🤝 Contributing

We welcome contributions! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature-name
```
3. Make changes and commit:
```bash
git commit -m "Add new feature"
```
4. Push your branch:
```bash
git push origin feature-name
```
5. Open a Pull Request.

---

## 📧 Contact

👋 Hi, I'm Dinesh Abeysinghe

⚡ Got questions or feedback? Feel free to reach out!  
💻 Need software developed? Feel free to contact me to bring your ideas to life!

<div align="center">
<a href="https://www.linkedin.com/in/dinesh-abeysinghe-bb773293" target="_blank">
    <img src="https://img.shields.io/static/v1?message=LinkedIn&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo" />
</a>

<a href="mailto:dinabeysinge@gmail.com" target="_blank">
    <img src="https://img.shields.io/static/v1?message=Gmail&logo=gmail&label=&color=D14836&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="gmail logo" />
</a>

<a href="https://huggingface.co/dineshabeysinghe" target="_blank">
    <img src="https://img.shields.io/static/v1?message=HuggingFace&logo=huggingface&label=&color=FFAA00&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="huggingface logo" />
</a>

<a href="https://www.linkedin.com/newsletters/7205635660026703872/" target="_blank">
    <img src="https://img.shields.io/static/v1?message=FutureAIToday&logo=linkedin&label=&color=0077B5&logoColor=white&labelColor=&style=for-the-badge" height="25" alt="linkedin logo" />
</a>
</div>

---

This README provides a complete overview of the project with code examples and contribution guidelines. Enjoy building with Python ML! 🎉


---

## 🖼️ Screenshots

### 📈 Training Set Visualization
![Training Set](images/training_plot.png)

### 📉 Test Set Visualization
![Test Set](images/test_plot.png)

### 📊 Model Evaluation Metrics
![Evaluation Metrics](images/evaluation_metrics.png)
