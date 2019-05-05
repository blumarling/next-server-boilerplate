import { compose } from 'recompose'

import {
  withGlobalStyle,
  withData
} from '../hoc'

export default (Compo) => compose(
  withGlobalStyle,
  withData
)(Compo)