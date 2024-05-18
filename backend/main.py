from flask import Flask, jsonify, request
import requests
import advertools as adv
app = Flask(__name__)

@app.route('/pagespeed', methods=['GET'])
def pagespeed():
    url = request.args.get('url', default = '', type = str)
    if url == '':
        return jsonify({"error": "No URL provided"}), 400

    # Replace 'YOUR_API_KEY' with your actual API Key
    api_key = 'AIzaSyACLmKUkHHdaqeaIznrqBibQ2XQGw1HEks'
    pagespeed_url = f"https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url={url}&key={api_key}"
    
    try:
        response = requests.get(pagespeed_url)
        data = response.json()
        return jsonify(data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route('/sitemap', methods=['GET'])
def analyze_sitemap():

    url = request.args.get('url', default = '', type = str)
    print(url)
    # if url == '':
    #     return jsonify({"error": "No URL provided"}), 400
    
    try:
        # robots_txt = adv.robotstxt_to_df(url + '/robots.txt')
        # print(robots_txt)

    # Fetch and parse XML sitemap
        # sitemap = adv.sitemap_to_df(url + '/sitemap.xml')
        # print(sitemap)

        sitemap = adv.crawl(url,"file.jl")
        print(sitemap)
        return jsonify(sitemap.to_dict())
    
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    # return ""    
if __name__ == "__main__":
    app.run(debug=True)
