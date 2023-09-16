import { infoDb } from "./types"
export default function Card(props:infoDb) {
  return (
    <div>{props.text}</div>
  )
}
