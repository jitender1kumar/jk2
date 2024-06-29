import { postsReducer } from "../posts/state/posts.reducer";
import { PostsState } from "../posts/state/posts.state";

import { payfReducer} from '../../../Projects/payfee/src/app/payfee/payfee.reducer';
import { PayfeeState} from '../../../Projects/payfee/src/app/payfee/payfee.state';

import { paidfReducer} from '../../../Projects/payfee/src/app/paidfees/paidfees.reducer';
import { PaidfeeState} from '../../../Projects/payfee/src/app/paidfees/paidfees.state';


    export interface AppState{
        posts:PostsState;
        payf:PayfeeState;
        paidf:PaidfeeState;
    }

    export const appReducer={
        posts:postsReducer,
        payf:payfReducer,
        paidf:paidfReducer,
        
    }