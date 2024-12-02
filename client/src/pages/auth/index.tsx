import React from 'react'
import { SignedIn, SignInButton, SignedOut, SignUpButton, UserButton } from '@clerk/clerk-react'

const Auth = () => {
  return (
    <div className='sign-in-container'>
      <SignedOut>
        <SignUpButton mode='modal'></SignUpButton>
        <SignInButton mode='modal'></SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton></UserButton>
      </SignedIn>
    </div>
  )
}

export default Auth
