from flask import Flask, render_template

# Inicializa o Flask
app = Flask(__name__)

# Lista temporária para guardar as tarefas
tarefas = ["Estudar Python", "Configurar o GitHub", "Criar projeto no VS Code"]

# Rota principal (a página inicial do site)
@app.route('/')
def home():
    # Passa a lista de tarefas para o HTML exibir
    return render_template('index.html', lista_tarefas=tarefas)

if __name__ == '__main__':
    # Roda o servidor localmente
    app.run(debug=True)
