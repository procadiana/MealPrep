require 'test_helper'

class Api::RecipesControllerTest < ActionDispatch::IntegrationTest
  test "should get update" do
    get api_recipes_update_url
    assert_response :success
  end

end
