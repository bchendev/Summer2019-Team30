/**
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a title and description. Used as a placard for team members listed
 * in the about page.
 * @return The html representation of the TeamIntroCard.
 */
const TeamIntroCard = function(props) {
  const profilePic = props.profilePic ? (
    <img src={props.profilePic} alt='Profile' />
  ) : null;

  return (
    <div className='TeamIntroCard'>
      <h2>{props.name}</h2>
      {profilePic}
      <p>{props.description}</p>
    </div>
  );
};

TeamIntroCard.propTypes = {
  /** The name of the team member. */
  name: PropTypes.string,
  /** A description about the team member. */
  description: PropTypes.string,
  /** The source of the profile pic. */
  profilePic: PropTypes.string
};

export default TeamIntroCard;
