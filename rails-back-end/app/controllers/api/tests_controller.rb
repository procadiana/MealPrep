class Api::TestsController < ApplicationController
  include HTTParty
  BASE_URL = "https://api.edamam.com/search?"
  API_PARTIAL_URL = "app_id=#{ENV['KEY_API_ID']}" + "&" +"app_key=#{ENV['KEY_API_PASS']}"

  def index1
    q = "https://api.edamam.com/search?q=chicken&#{API_PARTIAL_URL}&time=10-30"
    puts q
    request = HTTParty.get(q).to_json
    #request_hash = JSON.parse(request)
    test_r = request_hash["hits"][0]
    render json: {
      message: request
    }
  end

  def index
    render json: {
      message: "Hello"
    }
  end
end