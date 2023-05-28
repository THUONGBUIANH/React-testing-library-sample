import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from "../FollowersList";


const MockFollowersList = () => {
    return (
        <BrowserRouter>
            <FollowersList />
        </BrowserRouter>
    )
}

describe("FollowersList", () => {
      it('should fetch and render input element', async () => {        
        render(
            <MockFollowersList />
        );


        const followerDivElement = await screen.findByTestId(`follower-item-0`)
        expect(followerDivElement).toBeInTheDocument();

        // await waitFor(() => {
        //     expect(
        //       screen.getByTestId(`follower-item-0`),
        //     ).not.toBeInTheDocument()
        //   })
    });
})