class Door:
    def __init__(self, is_opened):
        self.is_opened = is_opened

    def open_door(self):
        self.is_opened = True
        print("Door is now open.")

    def close_door(self):
        self.is_opened = False
        print("Door is now closed.")

class BlockedDoor(Door):
    def __init__(self):
        super().__init__(False)


    def open_door(self):
        raise Exception("Error: A blocked door cannot be opened.")

    def close_door(self):
        raise Exception("Error: A blocked door cannot be closed.")
    

door1 = Door(True)
door1.open_door()
door1.close_door()
print(door1.is_opened)

door2 = BlockedDoor()