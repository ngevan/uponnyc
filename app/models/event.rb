class Event < ApplicationRecord
  belongs_to :organization
  belongs_to :cause
end
