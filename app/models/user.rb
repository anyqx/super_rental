class User < ApplicationRecord
    validates :email. :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true
end
