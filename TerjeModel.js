//Model

const model = {
  //app
  app: {
    currentUser: "Veileder", // 'bruker' & 'veileder'
    currentPage: "", // 'logIn', 'startPage', 'myChallenge' 'newRegister', 'feelsPage', 'intensityPage', 'commentPage', 'locationPage', 'triggerPage'                          'registerOverview',            'userOverview', 'experienceEditPage'
  },

  //inputs
  newExperience: {
    feelings: [
      { name: "glad", value: 5 },
      { name: "sint", value: 10 },
      { name: "trist", value: 3 },
    ],
    triggers: ["lukt", "berøring"],
    otherTrigger: "", // <input type="text" oninput="model.newExperience.otherTrigger = this.value"/>
    location: "Butikken",
    time: "",
    weekId: 1,
  },

  /*
    const id = ...
    const triggers = clone(model.newExperience.triggers);
    triggers.push(model.newExperience.otherTrigger);
    model.experiences.push({
            id: id, 
            feelings: clone(model.newExperience.feelings),   Google how to clone object in javascript
            Triggers: triggers,
            location: model.newExperience.location,
            time: model.newExperience.time,
            weekId: model.newExperience.weekId,
        },)

    model.newExperience = newExperience: {
        feelings: [],
        triggers: [],     
        otherTrigger: '',
        location: '',
        time: '',
        weekId: 1,
    };

        function clone(something){
            return JSON.parse(JSON.stringify(something));
        }
    */

  // forslag 2 til inputs(buttons)
  // buttonInputs: {
  //    feelsInput: [],
  //    strengthSliderInput: [],      //notabutton
  //    locationInputs: '',
  //    triggerInputs: [],
  // },

  //data
  feelings: ["Glad", "Trist", "Sint", "Sterk", "Rolig", "Redd"],
  locations: ["Hjemme", "Jobb", "Butikk", "Transport", "Aktivitet"],
  triggers: ["Syn", "Berøring", "Hørsel", "Smak", "Lukt", "intern", "Vet ikke"],

  week: [
    { id: 1, day: "Mandag", date: "29.10.21", count: 0 },
    { id: 2, day: "Tirsdag", date: "30.10.21", count: 0 },
    { id: 3, day: "Onsdag", date: "31.10.21", count: 0 },
    { id: 4, day: "Torsdag", date: "01.11.21", count: 0 },
    { id: 5, day: "Fredag", date: "02.11.21", count: 0 },
    { id: 6, day: "Lørdag", date: "03.11.21", count: 0 },
    { id: 7, day: "Søndag", date: "04.11.21", count: 0 },
  ],
  challenges: [
    { id: 1, text: "klappe x antall dovendyr", isActive: true },
    {
      id: 2,
      text: "Overbevise Vanja om at appen skal hete StronkFEELS",
      isActive: false,
    },
    { id: 3, text: "Mikkels velsignelse over modellen", isActive: false },
    {
      id: 4,
      text: "Jeg vil kunne være rundt hunder uten å bli redd",
      isActive: false,
    },
  ],
  experiences: [
    {
      id: 1,
      feelings: ["glad", "sint", "trist"],
      feelsMeter: [5, 10, 3],
      Triggers: ["lukt", "berøring"],
      Location: "Butikken",
      time: "2021-11-01 12:04",
      weekId: 1,
    },
    {
      id: 2,
      feelings: ["glad", "sint", "trist"],
      feelsMeter: [5, 10, 3],
      Triggers: ["lukt", "berøring"],
      Location: "Butikken",
      time: "",
      weekId: 2,
    },
  ],

  comments: [
    {
      id: 1,
      text: "Har jobbet med dette i dag",
      tidspunkt: "",
      user: "bruker",
      expId: 1,
    },
    {
      id: 2,
      text: "Skal jobbe med dette i morgen",
      tidspunkt: "",
      user: "bruker",
      expId: 2,
    },
    {
      id: 3,
      text: "Veldig bra Jøran!",
      tidspunkt: "",
      user: "veileder",
      expId: 1,
    },
    {
      id: 4,
      text: "sorry, det blir fredag heller",
      tidspunkt: "",
      user: "bruker",
      expId: 2,
    },
  ],
};

// Forslag 2:
// experiences: {
//     week: [
//         {
//             id: 1,
//             day: 'Mandag',
//             experienceRegister: [
//                 {
//                     id: 1,
//                     Feelings: ['glad', 'sint', 'trist',],
//                     Location: 'Butikken',
//                     Triggers: ['lukt', 'berøring'],
//                     Time: '',
//                     Comments: [
//                         {id: 1, text: 'Eksempel på kommentar', tidspunkt: '', user: 'bruker'},
//                         {id: 2, text: 'Eksempel på kommentar', tidspunkt: '', user: 'veileder'},
//                     ],
//                 },
//             ],
//         },
//         {
//             id: 1,
//             day: 'Tirsdag',
//             experienceRegister: [
//                 {
//                     id: 1,
//                     Feelings: ['glad', 'sint', 'trist',],
//                     Location: 'Butikken',
//                     Triggers: ['lukt', 'berøring'],
//                     Time: '',
//                     Comments: [
//                         {id: 1, text: 'Eksempel på kommentar', tidspunkt: '', user: 'bruker'},
//                         {id: 2, text: 'Eksempel på kommentar', tidspunkt: '', user: 'veileder'},
//                     ],
//                 },
//             ],
//         },
//     ],
// }

// feelsPage: [],   // mellomlagring av onclicks

//     stronkFeelsPage: {              // Incoming feels
//         demfeels: [],               // copy array fra feelsPage
//         sliders: [],                // tomt array som fylles med sliders(objects) utifra antall feels i demfeels. eksempel: {id: 1, slideValue: '',},
//     },

//     locationPage: {
//         Text: '',
//     },

//     triggerPage: [],
