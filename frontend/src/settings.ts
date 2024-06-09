import { gql } from "@apollo/client";

export const BOOK_PLACEHOLDER =
  "https://indigenousreadsrisingcom.b-cdn.net/wp-content/uploads/2023/10/2.png";

export const USER_AVATAR =
  "https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png-1.jpg";

export const GQL_BOOKS = gql`
  query Books {
    books {
      author
      coverPhotoURL
      readingLevel
      title
    }
  }
`;
