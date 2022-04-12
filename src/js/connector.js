const moment = require('moment');

function getCardMomentTime(card_id){
  return moment((new Date(1000*parseInt(card_id.substring(0,8),16)))).fromNow();
}

window.TrelloPowerUp.initialize({
  'card-badges': function(t, opts) {
    // return an array of card badges for the given card
    return t.card('all')
      .then(function(card) {
        const card_id = card.id;
        return [
          {
            dynamic: function () {
              return {
                text: getCardMomentTime(card_id),
                icon: "assests/created_at.svg",
                refresh: 30, // in seconds
              };
            },
          }
        ];
    })
  }
});
