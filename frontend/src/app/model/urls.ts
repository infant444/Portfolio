
// export const BASE="http://localhost:5000";

import { environment } from "../../environment/environment.pord";


const BASE=environment.production?'':'http://localhost:5000';
export const ADDWORK=BASE+"/api/work/addwork";
export const GETWORKS=BASE+"/api/work";
export const GETONEWORKS=BASE+"/api/work/getonework/";
export const SENDMESSAGE=BASE+"/api/message/enquire";

