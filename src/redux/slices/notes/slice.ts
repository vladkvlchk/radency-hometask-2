import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Note } from './types';

const items : Note[] = [
    {
        id: 1,
        name: 'Shopping list',
        created: '20/7/2021',
        category: "Task",
        content: 'Tomatoes, bread',
        dates: []
    },
    {
        id: 2,
        name: 'The Theory of Evolution',
        created: '27/7/2021',
        category: "Random Thought",
        content: 'The Theory of Evolution is one of the best-substantiated theories in the history of science',
        dates: []
    },
    {
        id: 3,
        name: 'New Feature',
        created: '5/4/2021',
        category: "Idea",
        content: 'Implement new features on POS terminals',
        dates: []
    },
    {
        id: 4,
        name: 'William Gaddis',
        created: '7/4/2021',
        category: "Quote",
        content: "Power doesn't come to those who were born strongest, or fastest, or smartest. No. It comes to those who will do anything to achieve it",
        dates: []
    },
    {
        id: 5,
        name: 'Books',
        created: '15/4/2021',
        category: "Task",
        content: "The Lean Startup",
        dates: []
    },
    {
        id: 6,
        name: 'Dentist',
        created: '3/5/2021',
        category: "Task",
        content: "I'm gonna have a dentist appointment on the 3/5/2021, I moved it from 7/8/2022",
        dates: ['3/5/2021', '7/8/2022']
    },
    {
        id: 7,
        name: 'Motivation',
        created: '31/5/2022',
        category: "Quote",
        content: "The World belongs to those who show up",
        dates: []
    }
]

const archive : Note[]  = [
    {
        id: 52348,
        name: 'George C. Marshall',
        created: '30/7/2022',
        category: 'Quote',
        content: "Don't look back. Look forward to your next objective",
        dates: []
    }
]

const initialState: {items : Note[], archive : Note[]} = {
    items, 
    archive
}; 

export const noteSlice = createSlice({
    name: 'note',
    initialState,
    reducers: {
        pushItem(state, action: PayloadAction<{name: string, category: string, content: string}>) : void{
            const note : Note = {
                id: 0,
                name: action.payload.name,
                created: '',
                category: action.payload.category,
                content: action.payload.content,
                dates: []
            };
            note.id = Math.floor(Math.random() * 1000000);
            const date = new Date();
            note.created = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`;
            note.dates = [];
        
            for(let i = 0; i < note.content.length; i++){// looking for dates
                const match = note.content.slice(i).match(/([0-3]?[0-9][/.][0-3]?[0-9][/.][1-9][0-9][0-9][0-9])/);
            
            if(match){
                note.dates.push(match[0]);
                i += match.index + 7;
            } else { break }
            }

            state.items.push(note);
        },
        removeItem(state, action: PayloadAction<number>) : void{
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },
        archiveItem(state, action: PayloadAction<number>) : void{
            state.archive.push(state.items.find(obj => obj.id === action.payload)); //adding to archive
            state.items = state.items.filter(obj => obj.id !== action.payload); //removing from items
        },
        unarchiveItem(state, action: PayloadAction<number>) : void{
            state.items.push(state.archive.find(obj => obj.id === action.payload)); //adding to items
            state.archive = state.archive.filter(obj => obj.id !== action.payload); //removing from archive
        },
        editItem(state, action: PayloadAction<Note>) : void{
            state.items = state.items.filter(obj => obj.id !== action.payload.id); //removing from items
            const note : Note = action.payload;
            note.dates = [];

            for(let i = 0; i < note.content.length; i++){// looking for dates
                const match = note.content.slice(i).match(/([0-3]?[0-9][/.][0-3]?[0-9][/.][1-9][0-9][0-9][0-9])/);
            
            if(match){
                note.dates.push(match[0]);
                i += match.index + 7;
            } else { break }
            }
            
            state.items.push(note); //adding updated object
        }
    }
});

export const { pushItem, removeItem, archiveItem, unarchiveItem, editItem } = noteSlice.actions;

export default noteSlice.reducer;