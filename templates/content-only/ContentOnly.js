import React from 'react';

import Logo from 'components/body/logo';
import Divider from 'components/body/divider';

import HOC from './HOC';
import Footer from './Footer';
import BodyPrototype from './Body/BodyPrototype';

import config from './config';
import { styles } from './styles';

const ContentOnly = ({ header }) => (
  <HOC styles={{ ...styles }}>
    <tbody>
      <tr>
        <td valign="top" id="templateHeader" style={styles.templateHeader} data-testid="bodyPropsTest">
          {header}
        </td>
      </tr>
      <tr>
        <td valign="top" id="templateBody" style={styles.templateBody}>
          <Divider>
            <BodyPrototype
              config={config}
            />
          </Divider>
        </td>
      </tr>
    </tbody>
    <Footer />
  </HOC>
);

export default ContentOnly;