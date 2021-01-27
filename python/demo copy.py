import time
import random

def do_work(*args):
  # from cltk.tokenize.word import WordTokenizer
  # word_tokenizer = WordTokenizer('latin')
  # print(word_tokenizer.tokenize(input))
  for a in args:
    print(a)
  

def parse(input):
  # from latinwordnet import LatinWordNet
  # LWN = LatinWordNet()
  print("t")
  tokens = input.split(" ")
  parsedTokens = []
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
