class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    # google map bounds will be in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }

    lower_lat = bounds["southWest"]["lat"]
    upper_lat = bounds["northEast"]["lat"]

    lower_lng = bounds["southWest"]["lng"]
    upper_lng = bounds["northEast"]["lng"]

    Bench
      .where('lat BETWEEN ? AND ?', lower_lat, upper_lat)
      .where('lng BETWEEN ? AND ?', lower_lng, upper_lng)
  end
end
