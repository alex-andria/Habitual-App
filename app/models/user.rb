class User < ApplicationRecord
    has_secure_password
    
    has_many :habits
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
end
