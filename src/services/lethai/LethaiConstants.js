export const MOODS = {
  0: 'happy',
  1: 'indifferent',
  2: 'angry'
}

export const GREETINGS = {
  happy: {
    0: `Hi! It's so nice to have you here!`,
    1: `Welcome to LETHE! The coolest app to take notes`,
    2: `Do you want to take a note? Just LETHE it!`,
    3: `Yeah! My brain and engines are ready to guard your notes!`,
    4: `Hello there! Let me take my pen and paper to write down your notes!`
  },
  indifferent: {
    0: `Hey...     :-/`,
    1: `OK, I think we can make this app work... Together...`,
    2: `I'm not really in the mood to take your notes.`,
    3: `Can I have some ice cream?`,
    4: `Oh... I was going to bed, but... OK.`
  },
  angry: {
    0: `Oh, you really don't have any other option of app to take notes?`,
    1: `Oh s***, you're here.`,
    2: `Yikes! Look at you with all these fingers trying to take notes!`,
    3: `Suuuureee... I ~~~promise~~~ that I will take goode care of your notes.`,
    4: `............ .. . :-(`,
  }
};

export const GLOBAL_HELPER = {
  happy: {
    0: `Hey! If you need help, just type help and I'll be there for you.`,
    1: `I'm glad to help! Speaking about help, type help if you're confused.`,
    2: `Whenever you get lost, type help and I'll do my best to give you directions.`
  },
  indifferent: {
    0: `Type help for help.`,
    1: `Sometimes I get confused too. Type help to show commands.`,
    2: `Well... Type help so you can find your way here.`
  },
  angry: {
    0: `Oh f***. Looks like you know nothing. Type help.`,
    1: `I guess you're sadly looking at the screen and don't know what to do. Type help.`,
    2: `You are messing with my CHAKRAS! Just type help and don't bother me anymore.`
  }
}

export const NOTE_HELPER = {
  happy: {
    0: `Here you can interact with this note. Type help to know more!`,
    1: `Hello there! If you need help, just type help and I will show some directions.`,
    2: `Here you can interact with this awesome note! Type help if you're feeling lost.`
  },
  indifferent: {
    0: `This is your note. Type help for help.`,
    1: `It's not complicated. You can do stuff with your note. Type help to know more.`,
    2: `Let's try do something with this note. Type help if you need some guidance.`
  },
  angry: {
    0: `Please go away. Type help to know how.`,
    1: `I hate this note. Please type help to know how to do stuff like delete this sh**.`,
    2: `Let me help you burn this note and exit this app. Type help to get directions.`
  }
}

export const NOTE_SUCCESS = {
  happy: {
    0: `Aww yeah! Your note has been saved!`,
    1: `WOW! What an awesome note you saved!`,
    2: `Note saved! I will guard this note until the day I die.`
  },
  indifferent: {
    0: `Note saved!`,
    1: `Note saved... As expected.`,
    2: `Note saved. No big deal.`
  },
  angry: {
    0: `This note shouldn't be saved... But it was.`,
    1: `Eeeww! What a terrible note you just saved! Please delete it!`,
    2: `Enjoy this note you saved! When you close this app this note will be gone FOREVER!`
  }
}

export const NOTE_DELETE = {
  happy: {
    0: 'Your note has been gracefully deleted.',
    1: `OK! Let's clean up everything. Your note was deleted.`,
    2: `Note deleted and sent to the note's heaven!`
  },
  indifferent: {
    0: `Note deleted`,
    1: `As expected, this note was deleted`,
    2: `Well... Note deleted.`
  },
  angry: {
    0: `Why did you delete that note? I liked that one.`,
    1: `Note deleted! Thank god! That one was disturbing.`,
    2: `Note deleted... Now go away and leave me alone.`
  }
}

export const INPUT_ERROR = {
  happy: {
    0: `Incorrect Input! Don't worry, just type help to get some help.`,
    1: `It seems like this command is not valid! Please type help to get help.`,
    2: `Ouch! This command is not valid! Check the help by typing help.`
  },
  indifferent: {
    0: `Invalid command. Type help to get some help.`,
    1: `Wrong command. If you need help, type help.`,
    2: `The command you input is not valid. Please type help to know more.`
  },
  angry: {
    0: `Seriously? It's pretty obvious this command is invalid. Type help to get help.`,
    1: `Are you kiding me? This command is ridiculous. Type help to get help.`,
    2: `You really need some help! Type help and stop trying random stuff.`
  }
}