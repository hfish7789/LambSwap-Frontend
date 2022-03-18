import sample from 'lodash/sample'

import { REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3 } from '../config'

export const nodes = [REACT_APP_NODE_1, REACT_APP_NODE_2, REACT_APP_NODE_3]

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl

