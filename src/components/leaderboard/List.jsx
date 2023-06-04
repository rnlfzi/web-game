import React from 'react'
import { Stack } from 'react-bootstrap'

const List = ({ data }) => {
  return (
    <Stack gap={2} className="rounded m-4 p-4">
      <h1>Leaderboard's</h1>
      {data.map((user, i) => (
        <Stack
          key={i}
          direction="horizontal"
          gap={3}
          className="rounded py-2 px-3"
          id={i === 0 ? "top1" : "rank"}
        >
          <div>{i + 1}</div>
          <img
            className="rounded-circle"
            src={`https://ui-avatars.com/api/?name=${user?.username}&background=random&size=40`}
            alt="profile avatar"
          />
          <div>{user?.username}</div>
          <div className="ms-auto">{user?.point}</div>
        </Stack>
      ))}
    </Stack>
  )
}

export default List