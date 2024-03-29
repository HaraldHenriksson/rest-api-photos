# Photo API endpoints

- All passwords **must** be salted and hashed.
- All received data **must** be sanitized and validated.
- All endpoints for photos and albums **must** require authentication.

# Route Map

## Albums

| Method | Path                    | Comment              |
| ------ | ----------------------- | -------------------- |
| GET    | /albums                 | Get all albums       |
| GET    | /albums/:albumId        | Get a single album   |
| POST   | /albums                 | Create a new album   |
| PATCH  | /albums/:albumId        | Update an album      |
| POST   | /albums/:albumId/photos | Add a photo an album |

### VG

| Method | Path                             | Comment                      |
| ------ | -------------------------------- | ---------------------------- |
| POST   | /albums/:albumId/photos          | Add multiple photos an album |
| DELETE | /albums/:albumId/photos/:photoId | Remove a photo from an album |
| DELETE | /albums/:albumId                 | Delete an album              |

## Photos

| Method | Path             | Comment            |
| ------ | ---------------- | ------------------ |
| GET    | /photos          | Get all photos     |
| GET    | /photos/:photoId | Get a single photo |
| POST   | /photos          | Create a new photo |
| PATCH  | /photos/:photoId | Update a photo     |

### VG

| Method | Path             | Comment        |
| ------ | ---------------- | -------------- |
| DELETE | /photos/:photoId | Delete a photo |

## Users

| Method | Path      | Comment             |
| ------ | --------- | ------------------- |
| POST   | /register | Register a new user |

### VG

| Method | Path     | Comment                |
| ------ | -------- | ---------------------- |
| POST   | /login   | Log in a user          |
| POST   | /refresh | Get a new access token |

---

---

# Users

## `POST /register`

Register a new user.

### Parameters

_None_

### Body

```json
{
  "email": "jn@badcameraphotography.com",
  "password": "omg-smile",
  "first_name": "Johan",
  "last_name": "Nordström"
}
```

- `email` _string_ **required** must be a valid email _and_ not already exist
- `password` _string_ **required** must be at least 6 chars long
- `first_name` _string_ **required** must be at least 3 chars long
- `last_name` _string_ **required** must be at least 3 chars long

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "email": "jn@badcameraphotography.com",
    "first_name": "Johan",
    "last_name": "Nordström"
  }
}
```

- `password` **must not** be included in response

---

## **[VG]** `POST /login`

Log in a user.

### Parameters

_None_

### Body

```json
{
  "email": "jn@badcameraphotography.com",
  "password": "omg-smile"
}
```

- `email` _string_ **required** must be a valid email _and_ exist
- `password` _string_ **required** must be at least 6 chars long

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJKb2hhbiBOb3Jkc3Ryw7ZtIiwiZW1haWwiOiJqbkB0aGVoaXZlcmVzaXN0YW5jZS5jb20iLCJpYXQiOjE2NzU5MzczNzMsImV4cCI6MTY3NTkzNzY3M30.YFKQW0tECCJpwMFhjxBIxkI5GdjRI2BB0YodYzMgVeA",
    "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJKb2hhbiBOb3Jkc3Ryw7ZtIiwiZW1haWwiOiJqbkB0aGVoaXZlcmVzaXN0YW5jZS5jb20iLCJpYXQiOjE2NzU5MzczNzMsImV4cCI6MTY3NTkzODI3M30.14qc-8Sua8d5XEIQoRhLDZk13gRvOPlwR7jbqQ03VoQ"
  }
}
```

---

## **[VG]** `POST /refresh`

Get a new access token.

### Headers

`Authorization: Bearer {refreshToken}`

### Parameters

_None_

### Body

_None_

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIm5hbWUiOiJKb2hhbiBOb3Jkc3Ryw7ZtIiwiZW1haWwiOiJqbkB0aGVoaXZlcmVzaXN0YW5jZS5jb20iLCJpYXQiOjE2NzU5Mzc4MTksImV4cCI6MTY3NTkzODExOX0.F9FcV7zvgVLbAKeLK0vrRW_MPiRyJ49t5xQOtgDlJqs"
  }
}
```

---

---

# Photos

## `GET /photos`

Returns a list of the user's photos.

### Parameters

_None_

### Request

_None_

### Response 200 OK

```json
{
  "status": "success",
  "data": [
    {
      "id": 42,
      "title": "Confetti Photo #1",
      "url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      "comment": "Confetti"
    },
    {
      "id": 43,
      "title": "Confetti Photo #2",
      "url": "https://images.unsplash.com/photo-1481162854517-d9e353af153d",
      "comment": "Confetti #2"
    },
    {
      "id": 44,
      "title": "Confetti Photo #3",
      "url": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
      "comment": "Confetti #3"
    },
    {
      "id": 45,
      "title": "Happy Photo",
      "url": "https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe",
      "comment": "So happy"
    }
  ]
}
```

---

## `GET /photos/:photoId`

Get a single photo.

### Parameters

- `photoId` **required** The id of the photo

### Body

_None_

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "id": 42,
    "title": "Confetti Photo #1",
    "url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "comment": "Confetti"
  }
}
```

---

## `POST /photos`

Create a new photo.

### Parameters

_None_

### Body

```json
{
  "title": "Confetti Photo #1",
  "url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  "comment": "Confetti"
}
```

- `title` _string_ **required** must be at least 3 chars long
- `url` _string_ **required** must be a url
- `comment` _string_ must be at least 3 chars long

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "title": "Confetti Photo #1",
    "url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "comment": "Confetti",
    "user_id": 4,
    "id": 47
  }
}
```

---

## `PATCH /photos/:photoId`

Update an existing photo.

### Parameters

- `photoId` **required** The id of the photo

### Body

```json
{
  "title": "When life gives you confetti, celebrate",
  "comment": "Yolo"
}
```

- `title` _string_ must be at least 3 chars long
- `url` _string_ must be a url
- `comment` _string_ must be at least 3 chars long

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "title": "When life gives you confetti, celebrate",
    "url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    "comment": "Yolo"
    "user_id": 4,
    "id": 47
  }
}
```

---

## **[VG]** `DELETE /photos/:photoId`

Delete a photo (incl. the **links** to any albums, but not the albums themselves).

### Parameters

- `photoId` **required** The id of the photo

### Body

_None_

### Response

`200 OK`

```json
{
  "status": "success",
  "data": null
}
```

---

---

# Albums

## `GET /albums`

Returns a list of the user's albums (excl. photos).

### Parameters

_None_

### Request

_None_

### Response 200 OK

```json
{
  "status": "success",
  "data": [
    {
      "id": 17,
      "title": "Confetti Album",
      "user_id": 4
    },
    {
      "id": 18,
      "title": "Happy Album",
      "user_id": 4
    }
  ]
}
```

---

## `GET /albums/:albumId`

Get a single album, incl. the album's photos.

### Parameters

- `albumId` **required** The id of the album

### Body

_None_

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "id": 17,
    "title": "Confetti Album",
    "photos": [
      {
        "id": 42,
        "title": "Confetti Photo #1",
        "url": "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
        "comment": "Confetti",
        "user_id": 4
      },
      {
        "id": 43,
        "title": "Confetti Photo #2",
        "url": "https://images.unsplash.com/photo-1481162854517-d9e353af153d",
        "comment": "Confetti #2",
        "user_id": 4
      },
      {
        "id": 44,
        "title": "Confetti Photo #3",
        "url": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819",
        "comment": "Confetti #3",
        "user_id": 4
      }
    ]
  }
}
```

---

## `POST /albums`

Create a new album.

### Parameters

_None_

### Body

```json
{
  "title": "Confetti Album"
}
```

- `title` _string_ **required** must be at least 3 chars long

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "title": "Confetti Album",
    "user_id": 4,
    "id": 17
  }
}
```

---

## `PATCH /albums/:albumId`

Update an existing album.

### Parameters

- `albumId` **required** The id of the album

### Body

```json
{
  "title": "Confetti'R'Us"
}
```

- `title` _string_ **required** must be at least 3 chars long

### Response

`200 OK`

```json
{
  "status": "success",
  "data": {
    "title": "Confetti'R'Us",
    "user_id": 4,
    "id": 17
  }
}
```

---

## **[VG]** `DELETE /albums/:albumId`

Delete an album (incl. the **links** to the photos, but not the photos themselves).

### Parameters

- `albumId` **required** The id of the album

### Body

_None_

### Response

`200 OK`

```json
{
  "status": "success",
  "data": null
}
```

---

## `POST /albums/:albumId/photos`

Add a photo to an album.

### Parameters

- `albumId` **required** The id of the album

### Body

```json
{
  "photo_id": 42
}
```

- `photo_id` _integer_ **required** must be an existing photo id

### Response

`200 OK`

```json
{
  "status": "success",
  "data": null
}
```

---

## **[VG]** `POST /albums/:albumId/photos`

Add multiple photos to an album.

### Parameters

- `albumId` **required** The id of the album

### Body

```json
{
  "photo_id": [42, 43, 44]
}
```

- `photo_id` _[integer]_ **required** must be an array of existing photo ids

### Response

`200 OK`

```json
{
  "status": "success",
  "data": null
}
```

---

## **[VG]** `DELETE /albums/:albumId/photos/:photoId`

Remove a photo from an album (but not the photo itself!)

### Parameters

- `albumId` **required** The id of the album
- `photoId` **required** The id of the photo

### Body

_None_

### Response

`200 OK`

```json
{
  "status": "success",
  "data": null
}
```
