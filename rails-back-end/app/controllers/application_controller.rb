#require 'dotenv/load'
class ApplicationController < ActionController::API
  include HTTParty


  BASE_URL = "https://api.edamam.com/search?"
  API_PARTIAL_URL = "app_id=#{ENV['KEY_API_ID']}" + "&" +"app_key=#{ENV['KEY_API_PASS']}"
  #query = BASE_URL + API_PARTIAL_URL + "&q=chicken"
  #q = "https://api.edamam.com/search?q=chicken#{API_PARTIAL_URL}&time=10-30"
  #puts q
  # request = HTTParty.get(q).to_json
  # request_hash = JSON.parse(request)
  # test_r = request_hash["hits"][0]
  # puts r = test_r["recipe"]["uri"] #http://www.edamam.com/ontologies/edamam.owl#recipe_9a7c1c4c891c72f649746650a9635919
  #r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9b5945e03f05acbf9d69625138385408
  #query_recipe = BASE_URL+ API_PARTIAL_URL + "&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9a7c1c4c891c72f649746650a9635919"
  #"&r=#{r}"
  #puts query_recipe = "https://api.edamam.com/search?app_id=4377435e&app_key=ff344f7fcaf17dfc1eb3b37cfbeac61a&r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9a7c1c4c891c72f649746650a9635919"

  #r_recipe= HTTParty.get(query_recipe)
  #puts "hello #{r_recipe}"
  #puts JSON.parse(r_recipe)
  def edaman_query_string(query)
    @query_string = BASE_URL + API_PARTIAL_URL + query
  end

  def query(query_string)
    @result = HTTParty.get(query_string).to_json
  end

end
