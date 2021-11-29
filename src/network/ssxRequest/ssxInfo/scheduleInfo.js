import { requestSsx } from '../request';
import { ssxAPIs} from '@/api/API.js'

export function getScheduleInfo(session){
  return requestSsx({
    url:ssxAPIs.scheduleGetAPI+session,
  })
}


export function getVcodeAndSession(twice){
  if(twice){
    return requestSsx({
      url:ssxAPIs.getVcodeSessionTwiceAPI+twice,
    })
  }else{
    return requestSsx({
      url:ssxAPIs.getVcodeSessionAPI
    })
  }
}

export function stuLogin(params){
  return requestSsx({
    url:ssxAPIs.stuLoginAPI,
    method:'POST',
    params:params
  })
}
