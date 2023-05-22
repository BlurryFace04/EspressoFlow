from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/supply_chain_manager')
def supply_chain_manager():
    return render_template('supply_chain_manager.html')


@app.route('/cafe')
def cafe():
    return render_template('cafe.html')


@app.route('/farmer')
def farmer():
    return render_template('farmer.html')


@app.route('/shipper')
def shipper():
    return render_template('shipper.html')


if __name__ == '__main__':
    app.run(debug=True)
