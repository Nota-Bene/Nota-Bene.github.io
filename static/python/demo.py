import time
import random

def parse(input):
  tokens = input.split(" ")
  parsedTokens = []
  time.sleep(5)
  for i in range(100000):
    test = random.randint(1, 8) + random.randint(-4, 90)
  for token in tokens:
    if token == "":
      continue
    parsedTokens.append({
      "text": token,
      "lemma": token,
      "pos": "verb",
      "decl": "3rd person singular future tense",
      "gloss": ["a test definition", "a second test definition"]
    })
  return parsedTokens
