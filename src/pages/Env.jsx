

export default function Env() {
  let msg = 'default message here Env No1111 113:37'
   try {
    msg = process.env.MY_CUSTOM_SECRET || msg
  } catch {}

  return <h1>{msg}</h1>
}
