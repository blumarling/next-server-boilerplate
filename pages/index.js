import gql from "graphql-tag";
import { Query } from "react-apollo";

import { withGlobalInitialProps } from '../hoc'
import { Test } from '@blucodes/components' 

const GET_DOGS = gql`
  {
    users {
      id
      name
    }
  }
`;

const Home = (props) => (
  <div>
    Ciao Giggio
    <Test />
    <Query query={GET_DOGS}>
      {
        ({ loading, error, data }) => {
          const {users} = data
          return (<div>
            {
              users.map(user => <span>{user.name}<br/></span>)
            }
          </div>)
        }
      }
    </Query>

  </div>
)

export default withGlobalInitialProps(Home)