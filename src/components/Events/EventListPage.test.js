import React from 'react';
import ReactDOM from 'react-dom';
import EventListPage from './EventListPage';
import EventListItem from './EventListItem';
import { MemoryRouter } from "react-router-dom";
import { Enzyme, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LinearProgress from '@material-ui/core/LinearProgress';

configure({ adapter: new Adapter() });

describe('check EventListPage', () => {
    it('returns no EventListItem', () => {
        const events = [];
        function getEvents() { };
    
        const wrapper = mount(
        <MemoryRouter>
            <EventListPage 
                events={events}
                getEvents={getEvents}
            />
        </MemoryRouter>);
        expect (wrapper.find(EventListItem)).toHaveLength(0);
      });


      it('returns one EventListItem', () => {
        const searchQuery = '';
        const events = [
            {"id":"QynPHWeMefOiqQrdt228","compensation":"yes","contactEmail":"joanna@test.com","scholarships":"no","eventDate":1560035160,"contactName":"Joanna","submissionWebsite":"http://google.com","submissionDate":1559775960,"coc":"yes","eventWebsite":"http://google.com","eventName":"Test Event","createdAt":1559689632,"location":"Toronto, ON, Canada"}
        ];
        function getEvents() { };
    
        const wrapper = mount(
        <MemoryRouter>
            <EventListPage 
                events={events}
                getEvents={getEvents}
                searchQuery={searchQuery}
            />
        </MemoryRouter>);
        expect (wrapper.find(EventListItem)).toHaveLength(1);
      });

      it('does not show a loader when events are rendered', () => {
        const isLoading = true;
        const searchQuery = '';
        const events = [
            {"id":"QynPHWeMefOiqQrdt228","compensation":"yes","contactEmail":"joanna@test.com","scholarships":"no","eventDate":1560035160,"contactName":"Joanna","submissionWebsite":"http://google.com","submissionDate":1559775960,"coc":"yes","eventWebsite":"http://google.com","eventName":"Test Event","createdAt":1559689632,"location":"Toronto, ON, Canada"}
        ];

        function getEvents() { };

        const wrapper = mount(
            <MemoryRouter>
                <EventListPage 
                    isLoading={isLoading}
                    events={events}
                    getEvents={getEvents}
                    searchQuery={searchQuery}
                />
            </MemoryRouter>);
            expect(wrapper.find(LinearProgress)).toHaveLength(1);
            expect(wrapper.find(EventListItem)).toHaveLength(0);
      });

      it('getEvents runs', () => {
        const isLoading = true;
        const searchQuery = '';

        const events = [
            {"id":"QynPHWeMefOiqQrdt228","compensation":"yes","contactEmail":"joanna@test.com","scholarships":"no","eventDate":1560035160,"contactName":"Joanna","submissionWebsite":"http://google.com","submissionDate":1559775960,"coc":"yes","eventWebsite":"http://google.com","eventName":"Test Event","createdAt":1559689632,"location":"Toronto, ON, Canada"}
        ];

        const getEvents = jest.fn();

        const wrapper = mount(
            <MemoryRouter>
                <EventListPage 
                    isLoading={isLoading}
                    events={events}
                    getEvents={getEvents}
                    searchQuery={searchQuery}
                />
            </MemoryRouter>);
            expect(getEvents).toHaveBeenCalled();
      });
});

  