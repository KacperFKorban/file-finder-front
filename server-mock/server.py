import asyncio
import websockets
import time
import json

async def hello(websocket, path):
    data = await websocket.recv()
    data = json.loads(data)
    print(data)

    while True:
        str = input("msg> ")
        await websocket.send(str)

start_server = websockets.serve(hello, "localhost", 8081)

asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()