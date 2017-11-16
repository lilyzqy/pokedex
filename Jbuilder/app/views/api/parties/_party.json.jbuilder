json.extract! party, :name, :location

json.guests do
  json.array! party.guests do |guest|
    json.name guest.name
    json.gifts guest.gifts, :title, :description
  end
end
