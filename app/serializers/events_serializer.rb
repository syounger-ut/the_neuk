class EventSerializer < ActiveModel::Serializer
  attributes :event_id, :list_id, :status, :name, :schedules
  attributes :website, :tags, :descriptions, :images

end

# {"event_id"=>"7f49969d-b650-6a1c-c3e1-be35000680d7",
#  "list_id"=>426199,
#  "status"=>"live",
#  "created_ts"=>"2014-08-13T08:13:48",
#  "modified_ts"=>"2014-11-06T13:35:26",
#  "name"=>"Thursday Quiz Nights",
#  "schedules"=>
#   [{"start_ts"=>"2017-11-30T20:30:00",
#     "end_ts"=>"2017-12-28T20:30:00",
#     "place_id"=>
#      "1954b8e7-0942-bb9a-035f-a72501319f2e",
#     "tags"=>[],
#     "ticket_summary"=>"£1.00",
#     "place"=>
#      {"place_id"=>
#        "1954b8e7-0942-bb9a-035f-a72501319f2e",
#       "list_id"=>20029230,
#       "name"=>"Swift Hound",
#       "address"=>"Rigby Road",
#       "town"=>"Blackpool",
#       "postal_code"=>"FY1 5EP",
#       "lat"=>53.80813,
#       "lng"=>-3.04829},
#     "performances"=>
#      [{"ts"=>"2017-12-28T20:30:00+00:00",
#        "duration"=>150,
#        "tickets"=>
#         [{"type"=>"Standard",
#           "currency"=>"GBP",
#           "min_price"=>"1"}],
#        "links"=>[]}]}],
#  "sort_name"=>"Thursday Quiz Nights",
#  "website"=>"http://www.discosmobile.com/",
#  "tags"=>
#   ["days out",
#    "family",
#    "target audience",
#    "quiz"],
#  "descriptions"=>
#   [{"type"=>"default",
#     "description"=>
#      "Quiz night hosted by DJ Richard Porter."}],
#  "images"=>
#   [{"url"=>
#      "https://files.list.co.uk/images/t/thursdays-swift-hound-lst147882.jpg",
#     "width"=>300,
#     "height"=>424,
#     "alt_text"=>"Thursday Quiz Nights"}]}
