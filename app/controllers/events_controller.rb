class EventsController < ApplicationController
  before_action :latest_booking, only: :index

  def index
    # headers = {Authorization: "Bearer #{ENV["LIST_API_KEY"]}"}

    # Coordinates of Kames, with 5 mile radius
    # list_params = {near: "55.8853827,-5.235613/30", min_date: @latest_booking.start_date, max_date: @latest_booking.end_date}
    # response = HTTParty.get('https://api.list.co.uk/v1/events', headers: headers, query: list_params)
    response = example_response

    if response
      # uncomment line 13 and delete 12 once its ready to make api calls
      render json: response
      # render json: response.parsed_response
    else
      render json: {errors: "Something went wrong getting events"}
    end
  end

  private

  def event_params
    params.permit(:start_date, :end_date)
  end

  def latest_booking
    @latest_booking = @current_user.bookings.last
  end

  def example_response
    [{
      event_id: "0000f4d6-3f42-bb9a-8676-730500042c1a",
      list_id: 273434,
      created_ts: "2012-08-24T11:37:12",
      modified_ts: "2016-08-23T02:10:58",
      name: "The Rocky Horror Show",
      sort_name: "Rocky Horror Show",
      website: "http://www.rockyhorror.co.uk",
      tags: [
        "comedy",
        "horror",
        "musical",
        "theatre"
      ],
      properties: {
        director: "Christopher Luscombe"
      },
      descriptions: [
        {
          type: "default",
          description: "Camp and outrageous comedy horror classic, directed by Christopher Luscombe on its 40th anniversary tour."
        },
        {
          type: "third-party",
          description: "The world's favourite rock 'n' roll musical Directed by Christopher Luscombe Following a record-breaking worldwide tour Richard O’Brien’s classic is ready to thrill you once again. Bursting at the seams with timeless classics, including Sweet Transvestite, Damn it Janet, and of course, the pelvic-thrusting Time Warp, Richard O’Brien’s Rocky Horror Show is a non-stop party starring Philip Franks (The Darling Buds of May, Heartbeat). Be warned, this show has rude parts! ‘Fresh, subversive, essential’ ★★★★★ Telegraph, Oct 2015"
        }
      ],
      schedules: [
        {
          start_ts: "2016-10-17T19:00:00",
          end_ts: "2016-10-22T19:30:00",
          tags: [],
          place: {
            place_id: "00000040-c75d-343d-b60c-ff050000c51e",
            list_id: 50462,
            name: "Liverpool Empire Theatre",
            address: "Lime Street",
            town: "Liverpool",
            postal_code: "L1 1JE",
            lat: 53.4089029751167,
            lng: -2.97831557866161
          },
          performances: [
            {
              ts: "2016-10-17T20:00:00+01:00",
              tickets: [
                {
                  type: "Standard",
                  currency: "GBP",
                  max_price: "53.40",
                  min_price: "14.90"
                }
              ],
              links: [
                {
                  url: "http://www.awin1.com/pclick.php?p=3531710701&a=99586&m=5931",
                  type: "booking"
                }
              ]
            },
            {
              ts: "2016-10-18T20:00:00+01:00",
              tickets: [
                {
                  type: "Standard",
                  currency: "GBP",
                  max_price: "53.40",
                  min_price: "14.90"
                }
              ],
              links: [
                {
                  url: "http://www.awin1.com/pclick.php?p=3531710703&a=99586&m=5931",
                  type: "booking"
                }
              ]
            }
          ]
        },
        ticket_summary: "£14.90-53.40"
      ]
    }]
  end
end
