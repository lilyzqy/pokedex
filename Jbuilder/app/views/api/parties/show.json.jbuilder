json.partial! './api/parties/party', party: @party

# json.gifts do
#   json.party.guests do |guest|
#     json.array! guest.gifts do |gift|
#       json.name gift.name
#     end
#   end
# end
