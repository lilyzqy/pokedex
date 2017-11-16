json.partial! './api/guests/guest', guest: @guest

json.set! :gifts, @guest.gifts.pluck(:title, :description)
