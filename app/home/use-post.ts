import { atom, useAtom } from 'jotai';
import { Post, posts } from './data';

type Config = {
  selected: Post['id'] | null;
};

const configAtom = atom<Config>({
  selected: posts[0].id,
});

type VoteState = {
  id: Post['id'];
  upChecked: boolean;
  downChecked: boolean;
};

const votesAtom = atom<VoteState[]>(posts.map((post) => ({
  id: post.id,
  upChecked: false,
  downChecked: false,
})));

export function usePost() {
  const [config, setConfig] = useAtom(configAtom);
  const [votes, setVotes] = useAtom(votesAtom);

  const handleVoteChange = (id: Post['id'], type: 'up' | 'down', checked: boolean) => {
    setVotes((prevVotes) =>
      prevVotes.map((vote) =>
        vote.id === id
          ? {
              ...vote,
              upChecked: type === 'up' ? checked : vote.upChecked,
              downChecked: type === 'down' ? checked : vote.downChecked,
            }
          : vote
      )
    );

    if (type === 'up' && checked) {
      setVotes((prevVotes) =>
        prevVotes.map((vote) =>
          vote.id === id ? { ...vote, downChecked: false } : vote
        )
      );
    }

    if (type === 'down' && checked) {
      setVotes((prevVotes) =>
        prevVotes.map((vote) =>
          vote.id === id ? { ...vote, upChecked: false } : vote
        )
      );
    }
  };

  return {
    config,
    setConfig,
    votes,
    handleVoteChange,
  };
}
