import * as actionTypes from '../actions/actionTypes';

const initialState = {
    kits: [
        {name:'Bring the Heat', img: "https://firebasestorage.googleapis.com/v0/b/reactstudio-7faaa.appspot.com/o/heat_kit.svg?alt=media&token=e18e4c28-6ecd-482f-8843-eba694262fa4"},
        {name:'Piano Man', img: "https://firebasestorage.googleapis.com/v0/b/reactstudio-7faaa.appspot.com/o/piano_man_kit.svg?alt=media&token=b12e28aa-a2ef-4792-b44c-5183e4a7704c"}
    ],
    kitName: null,
    drumPads: [],
    power: true,
    volume: 50,
    loaded: false
};

const AVAILABLE_KITS = [
    {   
        name: 'Bring the Heat',
        pads: [{
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Heater-1',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
        }, {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Heater-2',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
        }, {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Heater-3',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
        }, {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Heater-4',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
        }, {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Clap',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
        }, {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Open-HH',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
        }, {
            keyCode: 90,
            keyTrigger: 'Z',
            id: "Kick-n'-Hat",
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
        }, {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Kick',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
        }, {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Closed-HH',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
        }]
    },
    {
        name: 'Piano Man',
        pads: [{
            keyCode: 81,
            keyTrigger: 'Q',
            id: 'Chord-1',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
          }, {
            keyCode: 87,
            keyTrigger: 'W',
            id: 'Chord-2',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
          }, {
            keyCode: 69,
            keyTrigger: 'E',
            id: 'Chord-3',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
          }, {
            keyCode: 65,
            keyTrigger: 'A',
            id: 'Shaker',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
          }, {
            keyCode: 83,
            keyTrigger: 'S',
            id: 'Open-HH',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
          }, {
            keyCode: 68,
            keyTrigger: 'D',
            id: 'Closed-HH',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
          }, {
            keyCode: 90,
            keyTrigger: 'Z',
            id: 'Punchy-Kick',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
          }, {
            keyCode: 88,
            keyTrigger: 'X',
            id: 'Side-Stick',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
          }, {
            keyCode: 67,
            keyTrigger: 'C',
            id: 'Snare',
            soundFile: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
          }]
    }
    ];

const reducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.INIT_PADS):
            const newPads = AVAILABLE_KITS[0].pads;

            return {
                ...state,
                drumPads: newPads,
                kitName: 'Bring The Heat',
                loaded: true
            };
        case(actionTypes.VOLUME_CHANGE):           
            const audio = document.getElementsByTagName('audio');

            Object.keys(audio).map(key=>{
                audio[key].volume = action.event.target.value/100;
            });

            return {
                ...state,
                volume: action.event.target.value
            }
        case(actionTypes.SELECT_KIT):
            console.log(action.selectedKit);
            const newKit = AVAILABLE_KITS.find(kit=>kit.name === action.selectedKit).pads;
            console.log(newKit);
            return {
                ...state,
                drumPads: newKit,
                kitName: action.selectedKit,
                loaded: true
            };
    }

    return state;
}

export default reducer;