import React, { useRef } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import HomePage from '../Pages/HomePage/HomePage.component';
import BlogPage from '../Pages/BlogPage/BlogPage.component';
import ContactPage from '../Pages/ContactPage/ContactPage.Component';
import SignInPage from '../Pages/SignInPage/SignInPage.component';
import Header from '../Components/Header/Header.component';
import StoryPage from '../Pages/StoryPage/StoryPage.component';


import { IRootState } from '../redux/root-reducer';
import { selectStarted } from '../redux/home/home.selectors';
import { selectCurrentUser } from '../redux/user/user.selectors';


import './App.scss';

interface IMap {
  started: boolean;
  currentUser: object;
}

export const AppDOMObject = React.createContext<any>({});

function App({ started, currentUser, location }: any): JSX.Element {

  const app = useRef<HTMLDivElement | null>(null);

  

  return (
    <AppDOMObject.Provider value={{app: app}}>
      <div className='App' ref={app}>
        {location.pathname.slice(0,6) === '/story' ? null : <div className='app_main_section_backgroundImage'/>}
        <Header started={started}/>
        {
          started ? 
            <Switch>
              <Route path='/' exact render={() => <HomePage />}
                />
              <Route path='/blog' component={BlogPage} />
              <Route path='/contact' component={ContactPage}/>
              <Route path='/story' exact component={StoryPage} />
              <Route path='/story/:category&:id' component={StoryPage} />
              <Route path='/signin' render={() => 
                  currentUser ? <Redirect to='/blog'/> : <SignInPage />} />
            </Switch> : 
            null
        }
      </div>
    </AppDOMObject.Provider>
  );
}

const mapStateToProps = createStructuredSelector<IRootState, IMap>({
  started: selectStarted,
  currentUser: selectCurrentUser
});

export default withRouter(connect(mapStateToProps)(App));