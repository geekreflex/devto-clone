import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import MaxValue from '../components/excerpts/MaxValue';
import ColorPicker from '../components/widgets/ColorPicker';
import { updateProfileAsync } from '../features/userSlice';
import {
  BoxWrap,
  ButtonFill,
  InputGroup,
  InputWrap,
} from '../styles/DefaultStyles';

const Profile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [learning, setLearning] = useState('');
  const [skills, setSkills] = useState('');
  const [hacking, setHacking] = useState('');
  const [availableFor, setAvailableFor] = useState('');
  const [work, setWork] = useState('');
  const [education, setEducation] = useState('');
  const [brandColor1, setBrandColor1] = useState('');
  const [brandColor2, setBrandColor2] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      username,
      website,
      location,
      bio,
      learning,
      skills,
      hacking,
      availableFor,
      work,
      education,
      brandColor1,
      brandColor2,
    };
    console.log(payload);
    dispatch(updateProfileAsync(payload));
  };

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setEmail(user.email || '');
      setUsername(user.username || '');
      setWebsite(user.website || '');
      setLocation(user.location || '');
      setBio(user.bio || '');
      setLearning(user.learning || '');
      setSkills(user.skills || '');
      setHacking(user.hacking || '');
      setAvailableFor(user.availableFor || '');
      setWork(user.work || '');
      setEducation(user.education || '');
      setBrandColor1(user.brandColor1 || '');
      setBrandColor2(user.brandColor2 || '');
    }
  }, [user]);

  return (
    <ProfileWrap>
      <BoxWrap>
        <form onSubmit={onSubmit}>
          <section className="user">
            <h2>User</h2>
            <InputGroup>
              <InputWrap>
                <label>Name</label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </InputWrap>
              <InputWrap>
                <label>Email</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </InputWrap>
              <InputWrap>
                <label>Username</label>

                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </InputWrap>
            </InputGroup>
          </section>
          <section className="basic">
            <h2>Basic</h2>
            <InputGroup>
              <InputWrap>
                <label>Website URL</label>

                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
                <MaxValue value={website} max={100} />
              </InputWrap>
              <InputWrap>
                <label>Location</label>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <MaxValue value={location} max={100} />
              </InputWrap>
              <InputWrap>
                <label>Bio</label>

                <textarea
                  type="text"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
                <MaxValue value={bio} max={200} />
              </InputWrap>
            </InputGroup>
          </section>
          <section className="coding">
            <h2>Coding</h2>
            <InputGroup>
              <InputWrap>
                <label>Currently learning</label>
                <p>
                  What are you learning right now? What are the new tools and
                  languages you're picking up right now?
                </p>
                <textarea
                  type="text"
                  value={learning}
                  onChange={(e) => setLearning(e.target.value)}
                />
                <MaxValue value={learning} max={200} />
              </InputWrap>
              <InputWrap>
                <label>Skills/Languages</label>
                <p>
                  What tools and languages are you most experienced with? Are
                  you specialized or more of a generalist?
                </p>
                <textarea
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
                <MaxValue value={skills} max={200} />
              </InputWrap>
              <InputWrap>
                <label>Currently hacking on</label>
                <p>What projects are currently occupying most of your time?</p>
                <textarea
                  type="text"
                  value={hacking}
                  onChange={(e) => setHacking(e.target.value)}
                />
                <MaxValue value={hacking} max={200} />
              </InputWrap>
              <InputWrap>
                <label>Available for</label>
                <p>
                  What kinds of collaborations or discussions are you available
                  for? What's a good reason to say Hey! to you these days?
                </p>
                <textarea
                  type="text"
                  value={availableFor}
                  onChange={(e) => setAvailableFor(e.target.value)}
                />
                <MaxValue value={availableFor} max={200} />
              </InputWrap>
            </InputGroup>
          </section>
          <section>
            <h2>Work</h2>
            <InputGroup>
              <InputWrap>
                <label>Work</label>
                <input
                  type="text"
                  value={work}
                  onChange={(e) => setWork(e.target.value)}
                />
                <MaxValue value={work} max={100} />
              </InputWrap>
              <InputWrap>
                <label>Education</label>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                />
                <MaxValue value={education} max={100} />
              </InputWrap>
            </InputGroup>
          </section>
          <section>
            <h2>Branding</h2>
            <BrandColorWrap>
              <InputGroup>
                <InputWrap>
                  <label>Brand color 1</label>
                  <p>Used for backgrounds, borders etc.</p>
                  <input
                    type="text"
                    value={brandColor1}
                    onChange={(e) => setBrandColor1(e.target.value)}
                  />
                  <ColorPicker color={brandColor1} setColor={setBrandColor1} />
                </InputWrap>
                <InputWrap>
                  <label>Brand color 2</label>
                  <p>Used for texts (usually put on Brand color 1).</p>
                  <input
                    type="text"
                    value={brandColor2}
                    onChange={(e) => setBrandColor2(e.target.value)}
                  />
                  <ColorPicker color={brandColor2} setColor={setBrandColor2} />
                </InputWrap>
              </InputGroup>
            </BrandColorWrap>
          </section>
          <section className="submit">
            <ButtonFill>
              <button type="submit">Save Profile Information</button>
            </ButtonFill>
          </section>
        </form>
      </BoxWrap>
    </ProfileWrap>
  );
};

const ProfileWrap = styled.div`
  .coding label {
    margin-bottom: 10px;
  }
`;

const BrandColorWrap = styled.div`
  width: 50%;

  input {
    padding-left: 45px;
  }
`;

export default Profile;
