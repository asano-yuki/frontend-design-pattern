/* eslint-disable @typescript-eslint/no-explicit-any */
type Constructor<T = object> = new (...args: any[]) => T

const Timestamped = <TBase extends Constructor>(Base: TBase) => {
  return class extends Base {
    timestamp = Date.now()
  }
}

const Activatable = <TBase extends Constructor>(Base: TBase) => {
  return class extends Base {
    isActivated = false

    activate() {
      this.isActivated = true
    }

    deactivate() {
      this.isActivated = false
    }
  }
}

class User {
  name = ''
}

const TimestampedUser = Timestamped(User)

const TimestampedActivatableUser = Timestamped(Activatable(User))

const timestampedUserExample = new TimestampedUser()
console.log(timestampedUserExample.timestamp)

const timestampedActivatableUserExample = new TimestampedActivatableUser()
console.log(timestampedActivatableUserExample.timestamp)
console.log(timestampedActivatableUserExample.isActivated)