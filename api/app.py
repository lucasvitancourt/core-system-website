from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permite requisições de qualquer origem (ideal para testes locais/front-end separado)

@app.route('/')
def health():
    return jsonify({"status": "ok", "message": "API online"})

@app.route('/api/metrics.php')
@app.route('/api/metrics')
def metrics():
    # Aceita query param tipo, mas sempre retorna o mesmo formato
    tipo = request.args.get('tipo')
    metricas_gerais = {
        "empresas": 12,
        "clientes": 340,
        "servicos": 28,
        "usuarios": 15,
        "agendamentos": 120,
        "comandas": 45
    }
    return jsonify({
        "status": "success",
        "metricas_gerais": metricas_gerais
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)