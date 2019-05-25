#require 'dotenv/load'
class ApplicationController < ActionController::API
  include HTTParty


  BASE_URL = "https://api.edamam.com/search"
  API_PARTIAL_URL = "&app_id=#{ENV['KEY_API_ID']}" + "&" +"app_key=#{ENV['KEY_API_PASS']}"
  query = BASE_URL+ API_PARTIAL_URL + "&q=chicken"
  q = "https://api.edamam.com/search?q=chicken#{API_PARTIAL_URL}&time=10-30"
  puts q
  #a = "https://api.edamam.com/search?q=chicken&q=cucumber&app_id=1404bd0e&app_key=ad0ecd1c212bcb688d6462d5dda1bfb1&time=10-30&yield=3&health=peanut-free"
  request = HTTParty.get(q).to_json
  request_hash = JSON.parse(request)
  puts request_hash

  #https://api.edamam.com/search?q=chicken&q=cucumber&app_id=1404bd0e&app_key=ad0ecd1c212bcb688d6462d5dda1bfb1&time=10-30&yield=3&health=peanut-free

end
