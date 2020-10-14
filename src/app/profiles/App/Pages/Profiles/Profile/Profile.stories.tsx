import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Profile from './Profile';
import { generateStatefulNotice } from 'test/fakers/generateNotice';
import { generateStatefulContributor } from 'test/fakers/generateContributor';
import { MemoryRouter as Router } from 'react-router-dom';

storiesOf('Profile/Profile', module)
  .addDecorator(getStory => <Router>{getStory()}</Router>)
  .add('Normal', () => (
    <Profile
      featuredNotice={generateStatefulNotice()}
      notices={[
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice()
      ]}
      noticesLoading={false}
      subscribe={action('subscribe')}
      unsubscribe={action('unsubscribe')}
      fetchMoreNotices={action('fetchMoreNotices')}
      fetchedAll={false}
      contributor={generateStatefulContributor()}
      contributors={[
        generateStatefulContributor(),
        generateStatefulContributor()
      ]}
      connected={false}
      addToBrowser={action('addToBrowser')}
      goToContributor={action('goToContributor')}
    />
  ))
  .add('loading', () => (
    <Profile
      featuredNotice={generateStatefulNotice()}
      notices={[
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice()
      ]}
      noticesLoading={false}
      subscribe={action('subscribe')}
      unsubscribe={action('unsubscribe')}
      fetchMoreNotices={action('fetchMoreNotices')}
      fetchedAll={false}
      contributor={generateStatefulContributor({ loading: true })}
      contributors={[
        generateStatefulContributor(),
        generateStatefulContributor()
      ]}
      connected={false}
      addToBrowser={action('addToBrowser')}
      goToContributor={action('goToContributor')}
    />
  ))
  .add('contributorsLoading', () => (
    <Profile
      featuredNotice={generateStatefulNotice()}
      notices={[
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice()
      ]}
      noticesLoading={false}
      subscribe={action('subscribe')}
      unsubscribe={action('unsubscribe')}
      fetchMoreNotices={action('fetchMoreNotices')}
      fetchedAll={false}
      contributor={generateStatefulContributor()}
      contributors={[
        generateStatefulContributor(),
        generateStatefulContributor()
      ]}
      connected={false}
      addToBrowser={action('addToBrowser')}
      goToContributor={action('goToContributor')}
    />
  ))
  .add('noticesLoading', () => (
    <Profile
      featuredNotice={generateStatefulNotice()}
      notices={[
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice(),
        generateStatefulNotice()
      ]}
      noticesLoading
      subscribe={action('subscribe')}
      unsubscribe={action('unsubscribe')}
      fetchMoreNotices={action('fetchMoreNotices')}
      fetchedAll={false}
      contributor={generateStatefulContributor()}
      contributors={[
        generateStatefulContributor(),
        generateStatefulContributor()
      ]}
      connected={false}
      addToBrowser={action('addToBrowser')}
      goToContributor={action('goToContributor')}
    />
  ));