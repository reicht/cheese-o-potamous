class User < ActiveRecord::Base
  has_many :favs
  has_many :cheeses, through: :favs
  has_secure_password
end
