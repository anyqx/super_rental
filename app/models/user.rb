class User < ApplicationRecord
    validates :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 8}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token

    has_many :properties,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :Property

    has_many :cartitems,
    foreign_key: :user_id,
    class_name: :CartItem

    has_many :properties,
    through: :cartitems,
    source: :property

    has_many :favorites,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :Favorite

    has_many :properties,
        through: :favorites,
        source: :property

    #SPIRE
    def self.find_by_credentials(email, pw)
        user = User.find_by(email: email)
        if user && user.is_password?(pw)
            user
        else
            nil
        end
    end

    def password=(pw)
        @password = pw
        self.password_digest = BCrypt::Password.create(pw)
    end

    def is_password?(pw)
        BCrypt::Password.new(self.password_digest).is_password?(pw)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
