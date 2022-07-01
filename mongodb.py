def get_database():
    from pymongo import MongoClient
    import pymongo

    client = MongoClient('mongodb://192.168.1.207', 27017)
    
    return client['KC']

if __name__=="__main__":
    import pandas as pd
    db = get_database()
    # print(db['llc'].find({}))
    cursor = db['llc'].find({})
    df = pd.DataFrame(list(cursor))

    print(df)