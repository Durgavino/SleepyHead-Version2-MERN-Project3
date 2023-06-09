import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  {
    me {
      _id
      name
      email
      password
      sleepinform {
        bedTime
        wakeUpTime
        sleepDuration
      }
    }
  }
`;
